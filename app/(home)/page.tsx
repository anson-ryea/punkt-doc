import Link from "next/link";
import { Cards, Card } from "fumadocs-ui/components/card";
import { SmileIcon, ToolCaseIcon, BookMarkedIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 space-y-8 px-4 md:px-8 lg:px-32">
      <div className="space-y-4 mt-8">
        <h1 className="text-4xl font-bold">Want to know more abount Punkt?</h1>
        <h4>Portal to different sections of documentation.</h4>
      </div>
      <div>
        <Cards>
          <Card
            icon={<SmileIcon />}
            href="/docs/user-guide"
            title=""
            className="text-left"
          >
            <h1 className="text-base font-medium text-black dark:text-white">
              User Guide
            </h1>
            <p>Be a power user and master Punkt.</p>
          </Card>
          <Card
            icon={<ToolCaseIcon />}
            href="/docs/developer-guide"
            title=""
            className="text-left"
          >
            <h1 className="text-base font-medium text-black dark:text-white">
              Developer Guide
            </h1>
            <p>
              Everything you need to know before you start developing with
              Punkt.
            </p>
          </Card>
          <Card
            icon={<BookMarkedIcon />}
            href="/docs/reference"
            title=""
            className="text-left"
          >
            <h1 className="text-base font-medium text-black dark:text-white">
              Reference
            </h1>
            <p>Punkt's commands and options in detail.</p>
          </Card>
        </Cards>
      </div>
    </div>
  );
}
