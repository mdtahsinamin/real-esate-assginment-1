import Button from "./../../button/Button";
const UpperCTASection = () => {
  return (
    <div className="container mx-auto">
      <div className="relative overflow-hidden">
        <div className="-mx-4 flex flex-wrap items-stretch">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[570px] text-center">
              <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                <span>What Are You Looking For?</span>
                <span className="text-3xl font-normal md:text-[40px]">
                  Get Started Now
                </span>
              </h2>
              <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                There are many variations of passages of Lorem Ipsum but the
                majority have suffered in some form.
              </p>

              <Button
                inputText={"Let's have a meeting"}
                path={"javascript:void(0)"}
                innerStyle={
                  "inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperCTASection;
