import "./services.css"

const services = [
  { title: "Parents", description: "<li>Provides AI-driven tools to create a safe and customizable online environment. <li>Delivers data insights into children’s digital behaviors and personalized app suggestions.  <li>Builds a parent-teacher community for collaboration." },
  { title: "School", description: "<li>Offers AI-powered solutions for optimizing teaching methods and administrative decisions. <li>Enhances school presence with data-driven insights, free publicity, and monetization opportunities." },
  { title: "Students", description: "<li>Introduces an AI companion for fun and support.<li>Allows personalized app creation and rewards.<li>Creates a secure, ad-free, and toxicity-free digital community." },
  { title: "Data Analytics", description: "Insights from your data" },
]

export default function Services() {
  return (
    <div className="services container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <ul className="list-disc list-inside pl-6 text-blue-500">
              {service.description.split("<li>").filter(item => item.trim() !== "").map((item, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
              ))}
            </ul>
            {/* <p>{service.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

