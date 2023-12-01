var xuLyXacNhan =  function() {
    
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    var diemTrungBinh = tinhDiemTrungBinh(diemToan, diemLy, diemHoa);
    var xepLoaiSV = xepLoai(diemTrungBinh, diemRenLuyen);
    
    //xử lý in kết quả ra giao diện
    document.querySelector('#txtTenSinhVien').innerHTML = tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = loaiSinhVien;
    document.querySelector('#txtDiemTrungBinh').innerHTML = diemTrungBinh.toFixed(2);
    document.querySelector('#txtXepLoai').innerHTML = xepLoaiSV;
}

var tinhDiemTrungBinh = function(diemToan, diemLy, diemHoa){
    var dtb = (Number(diemToan) + Number(diemLy) + Number(diemHoa))/3 ;
    return dtb;
}

var xepLoai = function(diemTrungBinh, diemRenLuyen){
    if(diemRenLuyen < 5){
        return 'Yếu';
    }else {
        if(diemTrungBinh < 5){
        return 'Yếu';
    }else if(diemTrungBinh >= 5 && diemTrungBinh <6.5){
        return 'Trung Bình';
    }else if(diemTrungBinh >= 6.5 && diemTrungBinh <8){
        return 'Khá';
    }else if(diemTrungBinh >= 8 && diemTrungBinh < 9){
        return 'Giỏi';
    }else if(diemTrungBinh >= 9 && diemTrungBinh <= 10){
        return 'Xuất Sắc';
    }else{
        return 'Không hợp lệ!';
    }
  }
}

document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;