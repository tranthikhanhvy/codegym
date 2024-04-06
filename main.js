var danhsachnhanvien = new DanhSachNhanVien();
var validation = new Validation();
function DonID(id)
{
    var element = document.getElementById(id);
    return element;
}
function Themnhanvien(){
    var idnv =DonID("idnv").value;
    var hoten =DonID("hoten").value;
    var cmnd =DonID("cmnd").value;
    var diachi =DonID("diachi").value;
    var sdt =DonID("sdt").value;
    var loi=0;
    if(KiemTraRong("idnv",idnv) == true)
    {
        loi++;
    }
    if(KiemTraRong("hoten",hoten) == true)
    {
        loi++;
    }
    if(KiemTraRong("cmnd",cmnd) == true)
    {
        loi++;
    }
    if(KiemTraRong("diachi",diachi) == true)
    {
        loi++;
    }
    if(validation.KiemTraSDT(sdt))
    {
        document.getElementById("sdt").style.borderColor = "green";
    }
    else
    {
        document.getElementById("sdt").style.borderColor = "red";
        loi++;
    }
    if(loi !=0 ){
        return;
    }
    var nhanvien = new NhanVien(idnv, hoten, cmnd, diachi, sdt);
    danhsachnhanvien.Themnhanvien(nhanvien);
    CapNhatDanhSachNhanVien(danhsachnhanvien);
    console.log(danhsachnhanvien);

}   
    function KiemTraRong(id, value){
        if(validation.KiemTraRong(value) == true)
        {
            DonID(id).style.borderColor ="red";
            return true;
        }
        else
        {
            DonID(id).style.borderColor ="green";
            return false;
        }
    }
    function CapNhatDanhSachNhanVien(DanhSachNhanVien)
    {
        var listTableNV = DonID("tbodyNhanVien");
        listTableNV.innerHTML = "";
        for( var i=0; i<DanhSachNhanVien.DSNV.length ; i++)
        {
            //LẤY THÔNG TIN NHÂN VIÊN TRONG MẢNG
            var sv = danhsachnhanvien.DSNV[i];
            //TẠO THẺ TR
            var trSinhVien = document.createElement("tr")
            var tdCheckBox = document.createElement("td");

            var ckbidnv = document.createElement("input");
            console.log(ckbidnv);
            ckbidnv.setAttribute("classname", "ckbidnv")
            ckbidnv.setAttribute("type", "checkbox")
            ckbidnv.setAttribute("value", sv.idnv);
            tdCheckBox.appendChild(ckbidnv);

            var tdidnv = TaoTheTD("idnv", sv.idnv);
            var tdhoten = TaoTheTD("hoten", sv.hoten);
            var tdcmnd = TaoTheTD("cmnd", sv.cmnd);
            var tddiachi = TaoTheTD("diachi", sv.diachi);
            var tdsdt = TaoTheTD("sdt", sv.sdt);
            trSinhVien.appendChild(tdCheckBox);
            trSinhVien.appendChild(tdidnv);
            trSinhVien.appendChild(tdhoten);
            trSinhVien.appendChild(tdcmnd);
            trSinhVien.appendChild(tddiachi);
            trSinhVien.appendChild(tdsdt);
            listTableNV.appendChild(trSinhVien);
        }
    }
    function TaoTheTD(classname, value)
    {
        var td = document.createElement("td");
        td.className = classname;
        td.innerHTML = value;
        return td;
    }
   function SetStorage()
   {    
        var jsDanhSachNhanVien = JSON.stringify(danhsachnhanvien.DSNV);
        localStorage.setItem("Danhsachnv", jsDanhSachNhanVien);
   }
   function GetStorage()
   {
        var jsDanhSachNhanVien = localStorage.getItem("Danhsachnv");
        var mangdsnv = JSON.parse(jsDanhSachNhanVien);
        danhsachnhanvien.DSNV = mangdsnv;
        CapNhatDanhSachNhanVien(danhsachnhanvien);
   }
