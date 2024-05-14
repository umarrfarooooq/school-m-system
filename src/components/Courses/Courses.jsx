import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image";

export function Courses() {
  return (<>
    <section className="w-full py-12 md:py-24 lg:py-32 container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card>
            <Image
              alt="Course 1"
              className="object-cover w-full h-48 rounded-t-lg"
              height={225}
              src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/c0q23b7tcfpixbcssrrh"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400} />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
              <div className="mt-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#FFF500] px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-[#fffc98] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Course 1"
              className="object-cover w-full h-48 rounded-t-lg"
              height={225}
              src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/ilgxvplznejhqvlo1xv9"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400} />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
              <div className="mt-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#FFF500] px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-[#fffc98] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Course 1"
              className="object-cover w-full h-48 rounded-t-lg"
              height={225}
              src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/proeh0wughiywfxa6uk6"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400} />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
              <div className="mt-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#FFF500] px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-[#fffc98] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <Image
              alt="Course 1"
              className="object-cover w-full h-48 rounded-t-lg"
              height={225}
              src="https://res.cloudinary.com/dtcz2zuev/image/upload/alghawalimanpower/bk3lfg8frxxcyzktsehg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400} />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Introduction to Web Development</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Learn the fundamentals of web development, including HTML, CSS, and JavaScript.
              </p>
              <div className="mt-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#FFF500] px-4 py-2 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-[#fffc98] focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
                href="#">
                Learn More
              </Link>
              </div>
            </CardContent>
          </Card>
          
        </div>
    </section>
  </>);
}
