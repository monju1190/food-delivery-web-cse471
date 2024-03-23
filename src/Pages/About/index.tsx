const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="container mx-auto py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-primary text-slate-500">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-4">
          <img src="src/img/mon" alt="Monjur Ahmed" className="w-32 h-32 rounded-full mx-auto object-cover" />
          <h3>Monjur Ahmed</h3>
          <p className="text-gray-700 text-center">CSE Student, Brac University</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="images/opshora.jpg" alt="Opshora Noshin Eshika" className="w-32 h-32 rounded-full mx-auto object-cover" />
          <h3>Opshora Noshin Eshika</h3>
          <p className="text-gray-700 text-center">CSE Student, Brac University</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img src="images/miftahul.jpg" alt="Miftahul Jannat Orpi" className="w-32 h-32 rounded-full mx-auto object-cover" />
          <h3>Miftahul Jannat Orpi</h3>
          <p className="text-gray-700 text-center">CSE Student, Brac University</p>
        </div>
      </div>
    </div>

  );
}

export default About;