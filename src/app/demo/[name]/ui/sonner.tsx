import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const sonner = {
  name: "sonner",
  components: {
    Default: (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            onClick={() => toast("Event has been created")}
            variant="default"
          >
            Default
          </Button>
          <Button
            onClick={() => toast.success("Event has been created")}
            variant="default"
          >
            Success
          </Button>
          <Button
            onClick={() => toast.error("Event has been created")}
            variant="destructive"
          >
            Error
          </Button>
        </div>
        <Toaster />
      </div>
    ),
  },
};
