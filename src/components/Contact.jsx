/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
  return (
    <footer id="contact" className="lg:pt-20 lg:pb-20">
      <h2 className="font-bebas text-center mb-3 text-2xl mt-7 lg:text-5xl lg:mb-4 lg:mt-0 dark:text-white">
        Let's Connect
      </h2>
      <p className="font-manrope text-center dark:text-customGray font-medium leading-7">
        I'm always excited to connect with like-minded professionals and take on
        new challenged. Whether you have a project in mind or just want to chat,
        feel free to drop me a message. I'll make sure to respond as soon as I
        can!
      </p>
      <p className="font-manrope mt-7 lg:mt-5 dark:text-customGray font-normal text-center pb-7">
        Say hello at{" "}
        <a href="mailto:steveotianga8991@gmail.com" target="_blank" className="border-b-2 border-customGreen">
          steveotianga8991@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Contact;
