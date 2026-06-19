import profile from "../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Contact</h2>

      <div className="flex flex-col gap-5 text-gray-300 text-lg">

        {/* EMAIL */}
        <p
          href={profile.email}
          className="hover:text-white transition"
        >
          Email: {profile.email}
        </p>

        {/* GITHUB */}
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-white transition"
        >
          GitHub: {profile.github}
        </a>

        {/* LINKEDIN */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          LinkedIn: {profile.linkedin}
        </a>

        {/* LEETCODE */}
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition"
        >
          LeetCode: {profile.leetcode}
        </a>

        {/* HACKERRANK */}
        <a
          href={profile.hackerrank}
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-400 transition"
        >
          HackerRank: {profile.hackerrank}
        </a>

      </div>
    </section>
  );
}

export default Contact;