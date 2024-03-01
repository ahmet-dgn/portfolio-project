export default function JobExperince() {
    return (
        <div className="py-24 bg-white" id="about">
      <div className="container mx-auto flex justify-center flex-col">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-h4 font-bold text-custom-dark border-2 rounded-md leading-5 border-custom-dark p-2.5 mb-6 inline-block">
            JOB EXPERIENCE
          </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8	">
                <div className="w-full  py-8 px-8  rounded-lg border-2 ">
                    <h4 className="font-bold pb-2 text-h4 bg-g border-b"> Mabeyn Reklam Evi</h4>
                    <p className="font-medium border-b py-2">Graphic Design and Advertising Photographer</p>
                    <p className="text-small-regular pt-2">01/2015 - 01/2017</p>
                </div>
                <div className="w-full  py-8 px-8  rounded-lg border-2  ">
                    <h4 className="font-bold pb-2 text-h4 bg-g border-b"> Medicom</h4>
                    <p className="font-medium border-b py-2">Frontend Developer and Project Manager</p>
                    <p className="text-small-regular pt-2">01/2019 - 01/2024</p>
                </div>
             
            </div>
        </div>
      </div>
    </div>
    )
}