import { supabase, isSupabaseConfigured } from "../lib/supabaseClient";

/** Saves a visitor enquiry to the Supabase `leads` table. */
export async function submitLead({ fullName, email, phone, service, message, source }) {
  if (!isSupabaseConfigured) {
    throw new Error("The form is not connected yet. Please call us instead.");
  }
  const { error } = await supabase.from("leads").insert({
    full_name: fullName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    service: service || null,
    message: message?.trim() || null,
    source,
  });
  if (error) throw new Error("We could not send your request. Please try again or call us.");
}
