
const cn = (...classes) => classes.filter(Boolean).join(' ');

const MainContainer = ({children, className, ...props}) => (
  <main className={cn("h-screen my-8 flex gap-8", className)} {...props}>
    {children}
  </main>
);

const Button = ({children, className, ...props}) => (
  <button 
    className={cn("px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100", className)} 
    {...props}
  >
    {children}
  </button>
);

const Input = ({className, ...props}) => (
  <input 
    className={cn("w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600", className)} 
    {...props}
  />
);

const Textarea = ({className, ...props}) => (
    <textarea 
      className={cn("w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600", className)} 
      {...props}
    />
  );

const FormGroup = ({children, className, ...props}) => (
  <p className={cn("flex flex-col gap-1 my-4", className)} {...props}>
    {children}
  </p>
);

const Label = ({children, className, ...props}) => (
  <label className={cn("text-sm font-bold uppercase text-stone-500", className)} {...props}>
    {children}
  </label>
);


const Dialog = ({children, className, ...props}) => (
  <dialog className={cn("backdrop:bg-stone-900/90 p-4 rounded-md shadow-md", className)} {...props}>
    {children}
  </dialog>
);

const DialogFooter = ({children, className, ...props}) => (
  <menu className={cn("flex items-center justify-end gap-4 my-4", className)} {...props}>
    {children}
  </menu>
);


const Heading = ({children, level = 2, className, ...props}) => {
  const Tag = `h${level}`;
  const baseClasses = level === 1 ? "text-3xl font-bold text-stone-600 mb-2" : 
                     level === 2 ? "text-xl font-bold text-stone-700 my-4" : 
                     "text-2xl font-bold text-stone-700 mb-4";
  
  return (
    <Tag className={cn(baseClasses, className)} {...props}>
      {children}
    </Tag>
  );
};

const Text = ({children, className, ...props}) => (
  <p className={cn("text-stone-600 mb-4", className)} {...props}>
    {children}
  </p>
);


const Container = ({children, className, ...props}) => (
  <div className={cn("w-[35rem] mt-16", className)} {...props}>
    {children}
  </div>
);

const Header = ({children, className, ...props}) => (
  <header className={cn("pb-4 mb-4 border-b-2 border-stone-300", className)} {...props}>
    {children}
  </header>
);

const FlexBetween = ({children, className, ...props}) => (
  <div className={cn("flex items-center justify-between", className)} {...props}>
    {children}
  </div>
);

const FlexCenter = ({children, className, ...props}) => (
  <div className={cn("flex items-center gap-4", className)} {...props}>
    {children}
  </div>
);


const ButtonSecondary = ({children, className, ...props}) => (
  <button className={cn("text-stone-800 hover:text-stone-950", className)} {...props}>
    {children}
  </button>
);

const ButtonPrimary = ({children, className, ...props}) => (
  <button className={cn("px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950", className)} {...props}>
    {children}
  </button>
);

const ButtonDanger = ({children, className, ...props}) => (
  <button className={cn("text-stone-700 hover:text-red-500", className)} {...props}>
    {children}
  </button>
);


const InputSearch = ({className, ...props}) => (
  <input className={cn("w-64 px-2 py-1 rounded-sm bg-stone-200", className)} {...props} />
);


const EmptyState = ({children, className, ...props}) => (
  <div className={cn("mt-24 text-center w-2/3", className)} {...props}>
    {children}
  </div>
);

const EmptyStateImage = ({src, alt, className, ...props}) => (
  <img className={cn("w-16 h-16 object-contain mx-auto", className)} src={src} alt={alt} {...props} />
);

const EmptyStateTitle = ({children, className, ...props}) => (
  <h2 className={cn("text-xl font-bold text-stone-500 my-4", className)} {...props}>
    {children}
  </h2>
);

const EmptyStateText = ({children, className, ...props}) => (
  <p className={cn("text-stone-400 mb-4", className)} {...props}>
    {children}
  </p>
);


const Sidebar = ({children, className, ...props}) => (
  <aside className={cn("w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl", className)} {...props}>
    {children}
  </aside>
);

const SidebarTitle = ({children, className, ...props}) => (
  <h2 className={cn("mb-8 font-bold uppercase md:text-xl text-stone-200", className)} {...props}>
    {children}
  </h2>
);

const SidebarList = ({children, className, ...props}) => (
  <ul className={cn("mt-8", className)} {...props}>
    {children}
  </ul>
);

const SidebarButton = ({children, className, ...props}) => (
  <button className={cn("w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800", className)} {...props}>
    {children}
  </button>
);

const List = ({children, className, ...props}) => (
  <ul className={cn("p-4 mt-8 rounded-md bg-stone-100", className)} {...props}>
    {children}
  </ul>
);

const ListItem = ({children, className, ...props}) => (
  <li className={cn("flex justify-between my-4", className)} {...props}>
    {children}
  </li>
);

const TextMuted = ({children, className, ...props}) => (
  <p className={cn("text-stone-400 mb-4", className)} {...props}>
    {children}
  </p>
);

const TextStrong = ({children, className, ...props}) => (
  <p className={cn("text-stone-800 my-4", className)} {...props}>
    {children}
  </p>
);

const TextPreserve = ({children, className, ...props}) => (
  <p className={cn("text-stone-600 whitespace-pre-wrap", className)} {...props}>
    {children}
  </p>
);

export {
  cn,
  MainContainer,
  Button,
  Input,
  FormGroup,
  Label,
  Dialog,
  DialogFooter,
  Heading,
  Text,
  Container,
  Header,
  FlexBetween,
  FlexCenter,
  ButtonSecondary,
  ButtonPrimary,
  ButtonDanger,
  InputSearch,
  EmptyState,
  EmptyStateImage,
  EmptyStateTitle,
  EmptyStateText,
  Sidebar,
  SidebarTitle,
  SidebarList,
  SidebarButton,
  List,
  ListItem,
  TextMuted,
  TextStrong,
  TextPreserve,
  Textarea
};