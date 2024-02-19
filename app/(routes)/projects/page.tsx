import Header from '@/components/Header';

export default function About() {
  return (
    <main className="flex justify-center">
      <div className="lg:w-1/2 lg:mx-0 w-full mx-5">
        <Header />
        <h1 className="lg:text-4xl text-3xl font-semibold">This is the projects page</h1>
        <p className="lg:text-lg text-base mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pretium nibh. Aliquam placerat felis quis malesuada interdum. Sed vehicula nibh et dolor condimentum, et sodales ipsum dignissim. Etiam lectus dolor, elementum vel leo vitae, aliquam aliquet erat. Nullam maximus turpis non odio cursus maximus. Phasellus blandit non purus mollis venenatis. Proin auctor sem sit amet lectus dignissim, eget tempus nunc fringilla. Donec in mollis arcu. Ut ut enim ut nulla convallis vestibulum. Vestibulum eros tellus, viverra non sollicitudin at, efficitur ac lectus. Donec vitae tellus sit amet nisi suscipit faucibus vitae ut lacus. Duis commodo pretium mi ac tempus.
        </p>
      </div>
    </main>
  );
}
