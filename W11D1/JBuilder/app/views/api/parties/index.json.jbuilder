json.array! @parties do |party|
    json.id party.id
    json.name party.name
    json.location party.location
end