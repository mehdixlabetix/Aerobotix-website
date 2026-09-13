create table if not exists public.membership_applications (
  id uuid primary key,
  first_name text not null check (char_length(first_name) between 1 and 100),
  last_name text not null check (char_length(last_name) between 1 and 100),
  email text not null check (char_length(email) <= 254),
  phone text not null check (char_length(phone) between 8 and 25),
  study_level text,
  field_of_study text,
  facebook_url text,
  interests text check (char_length(interests) <= 2000),
  expectations text check (char_length(expectations) <= 2000),
  created_at timestamptz not null default now()
);

alter table public.membership_applications enable row level security;

revoke all on table public.membership_applications from anon, authenticated;
grant insert on table public.membership_applications to anon;

drop policy if exists "Allow anonymous membership applications" on public.membership_applications;
create policy "Allow anonymous membership applications"
  on public.membership_applications
  for insert
  to anon
  with check (true);
