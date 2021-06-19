create table patient
(
    name varchar(50) not null,
    email varchar(50) not null,
    id int not null,
    constraint id
        primary key (id)
    );
create table treatment
(
    id int not null,
    name varchar(50) not null,
    constraint id
        primary key (id)
);
create table appointment
(
    id int not null,
    time datetime not null,
    done tinyint null,
    treatment int not null,
    patient int null,
    constraint id
        primary key (id),
    constraint patient
        foreign key (patient) references patient (id),
    constraint treatment
        foreign key (treatment) references treatment (id)
);

