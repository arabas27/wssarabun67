import Editor from "../../components/Editor";
import { Select, TextInput } from "../../components/input";
import { H1, H2, H3 } from "../../components/typography";

export default function CreateDoc() {
  return (
    <div className="flex flex-col gap-3 w-full p-3 mt-3 md:px-28 lg:px-40 xl:px-80">
      <div className="flex items-center justify-center">
        <H1>บันทึกข้อความ</H1>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 items-center w-full">
          <H2 className="text-nowrap">ส่วนราชการ</H2>
          <TextInput
            name="organization"
            defaultValue='โรงเรียนเบตง "วีระราษฎร์ประสาน"  สังกัด สำนักงานเขตพื้นที่การศึกษามัธยมศึกษายะลา'
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center w-full">
          <div className="flex gap-3 w-full">
            <div className="flex gap-3 items-center grow">
              <H2 className="text-nowrap">ที่</H2>
              <TextInput name="docIndex" placeholder="เลขที่บันทึก" />
            </div>
            <div className="flex items-center">/</div>
            <div className="flex gap-3 items-center">
              <Select
                name="yearIndex"
                placeholder="เลขที่บันทึก"
                options={["2567", "2568"]}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center grow w-full">
            <H2 className="text-nowrap">วันที่</H2>
            <TextInput name="docDate" placeholder="2 พฤศจิกายน 2567" />
          </div>
        </div>
        <div className="flex gap-3 items-center w-full">
          <H2 className="text-nowrap">เรื่อง</H2>
          <TextInput name="title" placeholder="ชื่อเรื่อง" />
        </div>
        <hr className="border border-gray-500" />
        <div className="flex gap-3 items-center w-full">
          <H2 className="text-nowrap">เรียน</H2>
          <TextInput name="toWhom" />
        </div>

        <Editor />
      </div>
    </div>
  );
}
