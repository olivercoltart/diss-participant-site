create extension if not exists pgcrypto;

create table if not exists participants (
  id uuid primary key default gen_random_uuid(),
  consent_response text not null check (consent_response in ('agree', 'disagree')),
  consented_at timestamptz,
  completed_at timestamptz
);

create table if not exists study_responses (
  id bigserial primary key,
  participant_id uuid not null references participants(id) on delete cascade,
  page_key text not null,
  section_title text not null,
  question_number integer not null,
  question_text text not null,
  answer text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (participant_id, page_key, question_number)
);

create table if not exists game_events (
  id bigserial primary key,
  participant_id uuid not null references participants(id) on delete cascade,
  event_type text not null check (event_type in ('started', 'completed')),
  created_at timestamptz not null default now()
);
