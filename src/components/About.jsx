const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 mb-4">
        Welcome to our food delivery platform, where we connect you with the best restaurants in your area.
      </p>
      <p className="text-gray-600 mb-4">
        Our mission is to provide a seamless food ordering experience with a wide variety of cuisines to choose from.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-lg">John Doe</h3>
          <p className="text-gray-500">CEO</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-lg">Jane Smith</h3>
          <p className="text-gray-500">CTO</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-lg">Mike Johnson</h3>
          <p className="text-gray-500">Head of Operations</p>
        </div>
      </div>
    </div>
  );
};

export default About;
