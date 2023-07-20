insert into bookmart_anime.premiered (
	premier_id,
	name
)
	VALUES(
	'pr-1',
	'summer-2023'
);

select * from bookmart_anime.premiered;
select count (premier_id) from bookmart_anime.premiered;
SELECT premier_id FROM bookmart_anime.premiered WHERE id = (SELECT MAX(id) FROM bookmart_anime.premiered);


insert into bookmart_anime.


select * from bookmart_anime.genres;
select count (*) from bookmart_anime.genres;

select genre_id from bookmart_anime.genres