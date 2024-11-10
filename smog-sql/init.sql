create table recs.rec(
	id bigint primary key,
   record_date datetime,
   location varchar(100),
	weather json,
   air json
);