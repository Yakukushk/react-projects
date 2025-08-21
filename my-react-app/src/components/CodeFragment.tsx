import { Card, CardContent } from "./ui/card";

export default function CodeFragment({
  code,
  children,
}: {
  code: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Card className="bg-gray-100 mt-4 p-4">
        <CardContent>
          <pre className="whitespace-pre font-mono text-sm text-gray-600 overflow-x-auto">
            <code>{code}</code>
          </pre>
        </CardContent>
      </Card>
    </>
  );
}
