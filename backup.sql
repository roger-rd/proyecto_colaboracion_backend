PGDMP     %                	    {           allegory    15.3    15.3                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    20246    allegory    DATABASE     j   CREATE DATABASE allegory WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE allegory;
                postgres    false            �            1259    20270    datos_personales    TABLE     `  CREATE TABLE public.datos_personales (
    id_usuario integer NOT NULL,
    correo character varying(255) NOT NULL,
    "contraseña" character varying(255) NOT NULL,
    nombre character varying(255) NOT NULL,
    peso numeric,
    altura numeric,
    cintura numeric,
    pecho numeric,
    busto numeric,
    tipo_de_cuerpo character varying(50)
);
 $   DROP TABLE public.datos_personales;
       public         heap    postgres    false            �            1259    20269    datos_personales_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.datos_personales_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.datos_personales_id_usuario_seq;
       public          postgres    false    215                       0    0    datos_personales_id_usuario_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.datos_personales_id_usuario_seq OWNED BY public.datos_personales.id_usuario;
          public          postgres    false    214            �            1259    20495    usuarios    TABLE     �  CREATE TABLE public.usuarios (
    id_usuario integer NOT NULL,
    nombre character varying(255),
    apellido character varying(255),
    email character varying(255),
    password character varying(255),
    cintura numeric,
    busto numeric,
    altura numeric,
    peso numeric,
    cadera numeric,
    largo_tiro numeric,
    largo_pierna numeric,
    hombro numeric,
    largo_manga numeric,
    largo_pie numeric,
    empeine numeric,
    state character varying(50)
);
    DROP TABLE public.usuarios;
       public         heap    postgres    false            �            1259    20494    usuarios_id_usuario_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.usuarios_id_usuario_seq;
       public          postgres    false    217                       0    0    usuarios_id_usuario_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.usuarios_id_usuario_seq OWNED BY public.usuarios.id_usuario;
          public          postgres    false    216            t           2604    20273    datos_personales id_usuario    DEFAULT     �   ALTER TABLE ONLY public.datos_personales ALTER COLUMN id_usuario SET DEFAULT nextval('public.datos_personales_id_usuario_seq'::regclass);
 J   ALTER TABLE public.datos_personales ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    214    215    215            u           2604    20498    usuarios id_usuario    DEFAULT     z   ALTER TABLE ONLY public.usuarios ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuarios_id_usuario_seq'::regclass);
 B   ALTER TABLE public.usuarios ALTER COLUMN id_usuario DROP DEFAULT;
       public          postgres    false    217    216    217                      0    20270    datos_personales 
   TABLE DATA           �   COPY public.datos_personales (id_usuario, correo, "contraseña", nombre, peso, altura, cintura, pecho, busto, tipo_de_cuerpo) FROM stdin;
    public          postgres    false    215   �                 0    20495    usuarios 
   TABLE DATA           �   COPY public.usuarios (id_usuario, nombre, apellido, email, password, cintura, busto, altura, peso, cadera, largo_tiro, largo_pierna, hombro, largo_manga, largo_pie, empeine, state) FROM stdin;
    public          postgres    false    217   �                  0    0    datos_personales_id_usuario_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.datos_personales_id_usuario_seq', 1, false);
          public          postgres    false    214                       0    0    usuarios_id_usuario_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.usuarios_id_usuario_seq', 4, true);
          public          postgres    false    216                  x������ � �         8  x���Ks�0���S��9<�a�9@���U���%ADI�~���e�Cg_����ovupB<G� �P�ĠMpGO@7�=��MXMѴo�KGȻ�ĜQ� �K�EoS_��܎�:��!��\t�ɔgš�}[�`@�Z��*�$)�(�{Q��1v���s�a����׆��)���t��P~�%[H��-��v6�ۏ~���2&˫3C�h�g���*ZD�6	i��ln�����3y�J�o�'P�Ƒ�L�ҫ�Å�!NޙB�d3�Fc�L+��U]@8b�d���ƭ�ǭ����s��T�@EQ^ �ᙶ     