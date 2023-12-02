var sinhVien = new SinhVien();
var validation = new Validation();
var xuLyXacNhan =  function() {
    sinhVien.maSV = document.querySelector('#maSinhVien').value;
    sinhVien.tenSV = document.querySelector('#tenSinhVien').value;
    sinhVien.email = document.querySelector('#email').value;
    sinhVien.loaiSV = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    //kiểm tra valid
    var valid = true;
    //kiểm tra trống
    valid &= validation.kiemTraRong(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_required') 
    & validation.kiemTraRong(sinhVien.tenSV, 'Tên sinh viên', '#error_tenSinhVien_required') 
    & validation.kiemTraRong(sinhVien.email, 'Email', '#error_email_required') 
    & validation.kiemTraRong(sinhVien.diemHoa, 'Điểm Hóa', '#error_diemHoa_required') 
    & validation.kiemTraRong(sinhVien.diemLy, 'Điểm Lý', '#error_diemLy_required') 
    & validation.kiemTraRong(sinhVien.diemToan, 'Điểm Toán', '#error_diemToan_required') 
    & validation.kiemTraRong(sinhVien.diemRenLuyen, 'Điểm Rèn Luyện', '#error_diemRenLuyen_required') ;

    //kiểm tra tất cả là số
    valid &= validation.kiemTraTatCaLaSo(sinhVien.maSV, 'Mã sinh viên','#error_maSinhVien_all_number')
    & validation.kiemTraTatCaLaSo(sinhVien.diemHoa, 'Điểm hóa','#error_diemHoa_all_number')
    & validation.kiemTraTatCaLaSo(sinhVien.diemLy, 'Điểm lý','#error_diemLy_all_number')
    & validation.kiemTraTatCaLaSo(sinhVien.diemToan, 'Điểm toán','#error_diemToan_all_number')
    & validation.kiemTraTatCaLaSo(sinhVien.diemRenLuyen, 'Điểm rèn luyện','#error_diemRenLuyen_all_number');

    //kiểm tra tất cả là chữ
    valid &= validation.kiemTraTatCaLaChu(sinhVien.tenSV, 'Tên sinh viên', '#error_tenSinhVien_all_letter');
    
    //kiểm tra độ dài 
    valid &= validation.kiemTraDoDaiChuoi(sinhVien.maSV, 'Mã sinh viên', '#error_maSinhVien_min_max',4,4);

    //kiểm tra giá trị
    valid &= validation.kiemTraGiaTri(sinhVien.diemRenLuyen, 'Điểm rèn luyện','#error_diemRenLuyen_minMax_value',0,10)
    & validation.kiemTraGiaTri(sinhVien.diemHoa, 'Điểm hóa','#error_diemHoa_minMax_value',0,10)
    & validation.kiemTraGiaTri(sinhVien.diemLy, 'Điểm lý','#error_diemLy_minMax_value',0,10)
    & validation.kiemTraGiaTri(sinhVien.diemToan, 'Điểm toán','#error_diemToan_minMax_value',0,10);

    //kiểm tra email
    valid &= validation.kiemTraEmail(sinhVien.email, 'Email','#error_email');

    if(!valid){
        alert('Dữ liệu không hợp lệ!')
        return ;
    }

    //dom đến giao diện kết quả
    document.querySelector('#txtTenSinhVien').innerHTML = sinhVien.tenSV;
    document.querySelector('#txtMaSinhVien').innerHTML = sinhVien.maSV;
    document.querySelector('#txtEmail').innerHTML = sinhVien.email;
    document.querySelector('#txtLoaiSinhVien').innerHTML = sinhVien.loaiSV;
    document.querySelector('#txtDiemTrungBinh').innerHTML = sinhVien.tinhDiemTrungBinh().toFixed(2);
    document.querySelector('#txtXepLoai').innerHTML = sinhVien.xepLoai();
}


document.querySelector('#btnXacNhan').onclick = xuLyXacNhan