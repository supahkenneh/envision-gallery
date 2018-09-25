DROP DATABASE IF EXISTS envision_gallery;
DROP USER IF EXISTS envision_gallery_user;

CREATE USER envision_gallery_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE envision_gallery WITH OWNER envision_gallery_user;