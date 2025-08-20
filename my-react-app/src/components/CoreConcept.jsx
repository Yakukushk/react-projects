import {
  ListGroup,
  ListItem,
  ListItems,
  ListProvider,
} from "./ui/shadcn-io/list/index";

export default function CoreConcept({ data, ...props }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ListProvider key={props.index}>
        <ListGroup id={props.index} key={props.index}>
          <ListItems className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((item, index) => (
              <ListItem key={index} className="group">
                <div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border">
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ListItem>
            ))}
          </ListItems>
        </ListGroup>
      </ListProvider>
    </div>
  );
}
