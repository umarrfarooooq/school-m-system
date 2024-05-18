import CourseCard from "./CourseCard";

export function Courses() {
  return (<>
    <section className="w-full py-12 md:py-24 lg:py-32 container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          
        </div>
    </section>
  </>);
}
