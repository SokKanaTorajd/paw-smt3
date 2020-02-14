# file: home.py
# contoh halaman web dengan Flask

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profil/')
def about():
    return render_template('profil.html')

@app.route('/prodi/')
def major():
    return render_template('prodi.html')

@app.route('/kampus/')
def university():
    return render_template('kampus.html')

@app.route('/menu/')
def menu():
    return render_template('menu.html')

@app.route('/user/<id>')
def user_id(id):
    return 'Selamat datang. Anda telah masuk dengan ID %s!'%id

@app.route('/user/angkatan/<tahun>')
def angkatan(tahun):
    if tahun == '2016':
        return 'Anda harus lulus tahun ini'
    elif tahun == '2017':
        return 'Bersiaplah menghadapi tugas akhir'
    elif tahun == '2018':
        return 'Tugas kuliah bertambah banyak'
    elif tahun == '2019':
        return 'persiapkan semester 2'
    else:
        return 'mohon maaf, anda siapa ya? tolong masukkan angkatan anda'

if __name__ == '__main__':
    app.run(debug=True)