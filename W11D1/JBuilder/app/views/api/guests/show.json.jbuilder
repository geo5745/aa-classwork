json.extract! @guest, :id, :name, :age, :favorite_color
json.gifts do
    json.array! @guest.gifts, :title, :description
end