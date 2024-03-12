import { createClient } from "@/utils/supabase/server";
import { SubmitButton } from "./login/submit-button";
import { Upload} from "./action";




export default async function Index() {

  const supabase = createClient();
  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <form>
        <input
        type="file"
        name="attachment"
        required/>
        <SubmitButton
          formAction={Upload}
          className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
          pendingText="Uploading..."
        >
          Upload
        </SubmitButton>
      </form>
    </div>
  );
}
