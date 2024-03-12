'use server'
import { createClient } from "@/utils/supabase/server";
import { v4 } from "uuid";

export async function Upload(formData: FormData){
    const attachment = formData.get("attachment") as File;
    const fileName = v4() as string;
    const supabase = createClient();

    console.log("attachment", attachment);
      
    const {error} = await supabase.storage.from('attachments').upload(fileName, attachment);
    if (error) {
        console.log("Error Wa");
        return false;
    }
    else {
        console.log("Yayyyy")
        return true;
    }
}