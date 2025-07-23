
'use client';

export default function AboutTeam() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former Google PM with 10+ years in product development and user experience design.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20headshot%20portrait%20with%20confident%20smile%2C%20modern%20office%20background%2C%20executive%20leadership%20style%2C%20professional%20attire%20and%20lighting%2C%20corporate%20photography%20style%20with%20clean%20background&width=300&height=300&seq=team-sarah&orientation=squarish'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech lead with expertise in scalable systems and data analytics from Amazon and Microsoft.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20tech%20executive%20CTO%20headshot%20portrait%2C%20confident%20technology%20leader%2C%20modern%20office%20environment%2C%20professional%20business%20attire%2C%20clean%20corporate%20photography%20style%20with%20neutral%20background&width=300&height=300&seq=team-michael&orientation=squarish'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning UX designer focused on creating intuitive and beautiful user experiences.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20UX%20designer%20headshot%20portrait%20with%20creative%20and%20modern%20style%2C%20design-focused%20background%2C%20professional%20yet%20approachable%20appearance%2C%20clean%20studio%20lighting%20and%20contemporary%20photography&width=300&height=300&seq=team-emily&orientation=squarish'
    },
    {
      name: 'David Park',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer passionate about building robust and scalable web applications.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20software%20engineer%20headshot%20portrait%2C%20technology%20professional%20with%20modern%20style%2C%20office%20environment%20background%2C%20confident%20and%20approachable%20appearance%2C%20clean%20corporate%20photography%20style&width=300&height=300&seq=team-david&orientation=squarish'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Marketing',
      bio: 'Growth marketing expert with experience scaling SaaS products from startup to enterprise.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20marketing%20executive%20headshot%20portrait%20with%20modern%20business%20style%2C%20confident%20marketing%20professional%2C%20clean%20office%20background%2C%20professional%20corporate%20photography%20with%20natural%20lighting&width=300&height=300&seq=team-lisa&orientation=squarish'
    },
    {
      name: 'James Wilson',
      role: 'Head of Customer Success',
      bio: 'Customer advocate dedicated to ensuring every user gets maximum value from our platform.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20male%20customer%20success%20manager%20headshot%20portrait%2C%20friendly%20and%20approachable%20business%20professional%2C%20modern%20office%20setting%2C%20confident%20smile%20and%20professional%20attire%2C%20clean%20corporate%20photography%20style&width=300&height=300&seq=team-james&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate people behind Shortzen who are dedicated to making your link management experience exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200">
              <img 
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Want to join our team? We're always looking for talented people.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
