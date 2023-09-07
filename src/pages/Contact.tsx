import Social from "../components/Social";
export default function Contact() {
  return (
    <div className="bg-[url('img/location.jpg')] overflow-hidden bg-center bg-cover h-[90vh] animate-fade-right animate-once animate-duration-[2000ms] animate-ease-out">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56314.95810385043!2d20.15956172382164!3d63.82697626394373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c4e1b68add7f9%3A0x4034506de8c8560!2zVW1lw6U!5e0!3m2!1sen!2sse!4v1693998506598!5m2!1sen!2sse"
        loading="lazy"
        title="map"
        className="border-white border-2 float-right p-2 m-2 w-[50vw] h-[50vh]"
      ></iframe>
      <Social />
    </div>
  );
}
