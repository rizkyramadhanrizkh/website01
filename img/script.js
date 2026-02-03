function validationLogin() {
            // Ambil nilai dari input saat submit
            const usernameValue = document.getElementById('username').value;
            const passwordValue = document.getElementById('password').value;
            
            // Validasi
            if (usernameValue === "admin") {
                if (passwordValue === "123") {
                    alert("Selamat, Anda sudah login!");
                    // Di sini bisa tambahkan redirect, misalnya: window.location.href = "dashboard.html";
                    return true; // Izinkan form submit
                } else {
                    alert("Maaf, password salah!");
                    return false; // Cegah submit
                }
            } else {
                alert("Maaf, username salah!");
                return false; // Cegah submit
            }
        }