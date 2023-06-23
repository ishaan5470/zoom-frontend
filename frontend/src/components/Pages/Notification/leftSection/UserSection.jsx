function UserSection() {
  return (
    <div className="w-[230px] h-[560px] bg-white p-5 space-y-4 shadow-[0_2px_4px_rgba(0,0,0,0.25)] rounded-xl">
      <div className="flex gap-10">
        <div className="h-16 w-16 bg-[#D9D9D9] rounded-[40px] flex items-center justify-center border-2 border-solid border-gray-400"></div>
        <div className="h-16 w-16">
          <img src="Images/qr.png" alt="scanner" />
        </div>
      </div>
      <h3>User Name</h3>
      <p className="text-[#00063C]">Impact You Create</p>
    </div>
  );
}
export default UserSection;
