interface PageTitleProps {
  text: string;
}

const PageTitle = ({ text }: PageTitleProps) => {
  return <h1 className="font-extrabold text-purple-700 text-6xl mt-10 mb-5">{text}</h1>;
};

export default PageTitle;
