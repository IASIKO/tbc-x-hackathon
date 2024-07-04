import Image from "next/image";
import profile from "../../../public/assets/images/profile.jpeg";

const ProfileComp = () => {
  return (
    <main className="p-8">
      <section>
        <div className="flex flex-col w-[500px] m-auto">
          <Image
            src={profile}
            alt="Profile picture"
            className="w-full h-[250px] object-cover object-left-top rounded-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default ProfileComp;
