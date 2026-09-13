create table if not exists public.partnership_inquiries (
  id uuid primary key,
  organization text not null check (char_length(organization) between 1 and 150),
  contact_name text not null check (char_length(contact_name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 8 and 25),
  contact_role text check (char_length(contact_role) <= 100),
  website text check (char_length(website) <= 300),
  interest text not null check (interest in (
    'Equipment & technical expertise',
    'Competition sponsorship',
    'Events & training',
    'Let’s explore the possibilities'
  )),
  message text not null check (char_length(message) between 1 and 1500),
  created_at timestamptz not null default now()
);

alter table public.partnership_inquiries enable row level security;
revoke all on table public.partnership_inquiries from anon, authenticated;
grant insert on table public.partnership_inquiries to service_role;
