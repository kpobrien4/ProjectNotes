# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
track1 = Track.create([{title: "Pop rock song", notes: "Drums should be tighter"}])
track2 = Track.create([{title: "Banger1", notes: "Level out 808s"}])
track3 = Track.create([{title: "Acoustic ballad", notes: "Lyrics about love"}])