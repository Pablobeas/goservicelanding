
-- Create a table to store email subscriptions
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional - allows public access for email collection)
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (public email collection)
CREATE POLICY "Allow public email subscription" 
  ON public.email_subscriptions 
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create policy to prevent public reading of emails (privacy)
CREATE POLICY "Prevent public reading of emails" 
  ON public.email_subscriptions 
  FOR SELECT 
  USING (false);
