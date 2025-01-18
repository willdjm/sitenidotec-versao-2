export function Notices() {
    const news = [
      {
        title: 'How to use sticky note for problem solving',
        date: '20 October 2019',
        image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        link: '#',
      },
      {
        title: 'How to use sticky note for problem solving',
        date: '20 October 2019',
        image: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        link: '#',
      },
      {
        title: 'Morning routine to boost your mood',
        date: '25 November 2020',
        image: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        link: '#',
      },
      {
        title: 'All the features you want to know',
        date: '30 September 2020',
        image: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80',
        link: '#',
      },
      {
        title: 'Minimal workspace for your inspirations',
        date: '13 October 2019',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80',
        link: '#',
      },
      {
        title: 'What do you want to know about Blockchain',
        date: '20 October 2019',
        image: 'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        link: '#',
      },
    ];
  
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto max-w-screen-xl">
          <h1 className="text-2xl font-semibold text-sky-500 capitalize lg:text-2xl dark:text-white border-b-2 border-sky-500 dark:border-white/10">
            Últimas Notícias
          </h1>
  
          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {news.map((item, index) => (
              <div key={index} className="lg:flex group">
                {/* Imagem clicável com hover */}
                <a href={item.link} className="flex-shrink-0">
                    <picture>
                  <img
                    className="object-cover w-full h-56 rounded-lg lg:w-64 transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                  />
                  </picture>
                </a>
  
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                  {/* Título clicável com hover */}
                  <a
                    href={item.link}
                    className="text-xl font-semibold text-gray-800 group-hover:text-sky-500 transition-colors duration-200 dark:text-white"
                  >
                    {item.title}
                  </a>
  
                  <span className="text-sm text-gray-500 dark:text-gray-300">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  