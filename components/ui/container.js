export default function Container({ children }) {
  return (
    <div className="2xl:container mx-auto px-2 sm:px-4 xl:px-8 py-16 md:py-20 xl:py-32  w-full space-y-8">
      {children}
    </div>
  );
}
