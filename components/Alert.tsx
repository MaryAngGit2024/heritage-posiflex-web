import { MapPinCheckInside, Mail, Phone } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AlertDialog() {
  return (
    <Alert className="bg-[#3d2c7c] rounded-none">
      <div className="gap-[4rem] flex justify-center items-center">
        <AlertDescription className=" text-white flex gap-2 justify-center items-center">
          <MapPinCheckInside className="h-4 w-4 text-white" />
          #13 Linaw, Santa Mesa Heights, Quezon City, 1114 Metro Manila.
        </AlertDescription>
        <AlertDescription className="text-white flex gap-2 justify-center items-center">
          <Mail className="h-4 w-4 text-white" />
          ekowood@hmopi.net
        </AlertDescription>
        <AlertDescription className="text-white flex gap-2 justify-center items-center">
          <Phone className="h-4 w-4 text-white" />
          (632) 712-45-62
        </AlertDescription>
      </div>
    </Alert>
  );
}
