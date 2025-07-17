---
title: "Apa Itu Git dan GitHub?"
excerpt: "Bisa ngoding, tapi nggak ngerti command git? Yuk, belajar command git yang wajib kamu tahu!"
tags: ["git", "command", "tutorial"]
---

## 1. Membuat Repository Baru

* `git init` : Membuat repository baru di folder yang sedang diakses.

## 2. Menambahkan File ke Repository

* `git add <nama_file>` : Menambahkan file dengan nama `<nama_file>` ke staging area.
* `git add .` : Menambahkan semua file yang ada di folder yang sedang diakses ke staging area.

## 3. Membuat Commit

* `git commit -m "<pesan_commit>"` : Membuat commit dengan pesan `<pesan_commit>`.

## 4. Melihat Log Commit

* `git log` : Menampilkan log commit yang ada di repository.

## 5. Membuat Branch Baru

* `git branch <nama_branch>` : Membuat branch baru dengan nama `<nama_branch>`.

## 6. Beralih ke Branch yang Lain

* `git checkout <nama_branch>` : Beralih ke branch dengan nama `<nama_branch>`.

## 7. Menggabungkan Branch ke Branch Lain

* `git merge <nama_branch>` : Menggabungkan branch `<nama_branch>` ke branch yang sedang diakses.

## 8. Membuat Remote Repository

* `git remote add <nama_remote> <url_remote>` : Membuat remote repository dengan nama `<nama_remote>` dan URL `<url_remote>`.

## 9. Push ke Remote Repository

* `git push <nama_remote> <nama_branch>` : Mengirimkan branch `<nama_branch>` ke remote repository dengan nama `<nama_remote>`.

## 10. Pull dari Remote Repository

* `git pull <nama_remote> <nama_branch>` : Mengambil branch `<nama_branch>` dari remote repository dengan nama `<nama_remote>`.

## 11. Membuat Tag

* `git tag <nama_tag>` : Membuat tag dengan nama `<nama_tag>`.

## 12. Membuat Release

* `git tag -a <nama_tag> -m "<pesan_tag>"` : Membuat tag dengan nama `<nama_tag>` dan pesan `<pesan_tag>`.
