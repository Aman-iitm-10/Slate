import "./sign.css"

export default function Contact() {
  return (
    <div className="container mx-auto mt-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="sign-form">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div className="sign-form">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
        <div className="sign-form">
          <label htmlFor="subject" className="block mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            required
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
        <div className="sign-form">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  )
}

