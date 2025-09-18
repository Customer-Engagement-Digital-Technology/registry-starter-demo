import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const input = {
  name: "input",
  components: {
    Default: <Input placeholder="Default" />,
    Email: <Input type="email" placeholder="Email" />,
    WithButton: (
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" placeholder="With button" />
        <Button type="submit">Button</Button>
      </div>
    ),
    File: <Input id="picture" type="file" />,
  },
};
