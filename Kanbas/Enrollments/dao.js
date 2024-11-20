import Database from "../Database/index.js";
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
}
export function enrollUserInCourse(user, course) {
  console.log("enrollUserInCourse called with user:", user, "course:", course);
  const newEnrollment = { _id: Date.now(), user, course };
  Database.enrollments.push(newEnrollment);
  console.log("New enrollment added:", newEnrollment);
  return newEnrollment;
}
export function findAllEnrollments(){
  return Database.enrollments;
}