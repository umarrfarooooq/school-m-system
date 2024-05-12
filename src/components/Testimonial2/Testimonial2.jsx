import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import SchoolImage from "@/components/Main/images/About.png"
import Image from "next/image";
export function Testimonial2() {
  return (<>
    <main className="w-full">
      <section
        className="grid w-full container grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:gap-12 md:px-6 lg:px-8 lg:py-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
          <p className="text-gray-500 md:text-lg">
            Hear from our satisfied students about their experience with our school.
          </p>
          <div className="w-full max-w-md">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                      <blockquote className="text-lg font-medium leading-relaxed">
                        "The teachers are amazing and really care about the students. I've learned so much and feel
                        prepared for the future."
                      </blockquote>
                      <div>
                        <div className="font-medium">Jane Doe</div>
                        <div className="text-sm text-gray-500">Student, Grade 10</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                      <blockquote className="text-lg font-medium leading-relaxed">
                        "The school has a great community and I've made so many friends. The extracurricular
                        activities are also really fun and engaging."
                      </blockquote>
                      <div>
                        <div className="font-medium">Michael Johnson</div>
                        <div className="text-sm text-gray-500">Student, Grade 11</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                      <blockquote className="text-lg font-medium leading-relaxed">
                        "The school's focus on STEM education has really challenged me and helped me grow. I feel
                        well-prepared for college and my future career."
                      </blockquote>
                      <div>
                        <div className="font-medium">Emily Garcia</div>
                        <div className="text-sm text-gray-500">Student, Grade 12</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-start justify-between gap-4 p-6">
                      <blockquote className="text-lg font-medium leading-relaxed">
                        "The school's commitment to diversity and inclusion has been really inspiring. I feel valued
                        and supported as a student."
                      </blockquote>
                      <div>
                        <div className="font-medium">Liam Patel</div>
                        <div className="text-sm text-gray-500">Student, Grade 9</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className={`absolute top-3/4 right-8 -translate-y-1/2`}>
                <ChevronLeftIcon className="h-6 w-6" />
                </CarouselPrevious>
                <CarouselNext className="absolute top-3/4 right-12 -translate-y-1/2">
                <ChevronRightIcon className="h-6 w-6" />
                </CarouselNext>
            </Carousel>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            alt="School Image"
            className="rounded-lg object-cover"
            height="400"
            src={SchoolImage}
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width="600" />
        </div>
      </section>
    </main>
  </>);
}

function ChevronLeftIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>)
  );
}


function ChevronRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}
