import { Markdown } from "@react-email/components";

export default function EmailTemplate(description: string) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 shadow-blue-700 rounded-lg shadow-lg max-w-md mx-auto">
      <p>{description}</p>
    </div>
  )
}
