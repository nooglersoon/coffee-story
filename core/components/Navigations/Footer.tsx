import MainButton from "../Buttons/MainButton";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="bg-mainYellow shadow-[inset_0_11px_8px_-10px_rgba(0,0,0,0.6)]">
      <div className="max-w-screen-xl p-16 mx-auto sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 pt-8 pb-4">
          <p className="text-heading2 text-left text-black font-montserrat font-semibold text-shadow-xl">
            Temukan Lebih Banyak
          </p>
          <p className="text-body text-left text-black font-montserrat font-regular">
            Tertarik untuk membaca lebih banyak artikel mengenai rekayasa data spasial?
          </p>
        </div>
        <MainButton
          title="Baca di sini"
        />
        <p className="text-largeCaption text-left text-black font-montserrat font-semibold my-3">
          &copy; 2022. Rekayasa Data Spasial. All rights reserved.
        </p>
      </div>
    </footer>
  )
}