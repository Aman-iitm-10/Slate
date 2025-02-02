const services = [
  { title: "Web Development", description: "Custom websites and web applications" },
  { title: "Mobile Apps", description: "iOS and Android app development" },
  { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure" },
  { title: "Data Analytics", description: "Insights from your data" },
]

export default function Services() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

